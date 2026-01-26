'use client';

import { faCircleExclamation } from '@awesome.me/kit-7993323d0c/icons/classic/regular';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import parse, { attributesToProps, domToReact, type DOMNode, type HTMLReactParserOptions } from 'html-react-parser';
import objectHash from 'object-hash';
import { useMemo, useState } from 'react';
import { useDismissible } from '../../utils/use-dismissible';
import { Alert, AlertFooter, AlertMessage, AlertSubtitle, AlertTitle } from '../alert/alert';
import { Container } from '../container/container';
import { Link } from '../link/link';
import { Modal } from '../modal/modal';

export type DismissibleAlertProps = {
  title: string;
  description: string;
  timestamp: string;
};

const parserOptions: HTMLReactParserOptions = {
  replace: (node, _index) => {
    if (node.type === 'text') {
      return node.data;
    }

    if (node.type !== 'tag') {
      return null;
    }

    const props = attributesToProps(node.attribs);
    const children = domToReact(node.children as DOMNode[], parserOptions);

    // Only allow 'a' tags.
    switch (node.tagName) {
      case 'a':
        return <Link href={String(props.href)}>{children}</Link>;
      case 'br':
        return <br />;
      default:
        return null;
    }
  },
};

export function DismissibleAlert({ title, description, timestamp }: DismissibleAlertProps) {
  const [show, setShow] = useState(true);
  const hash = useMemo(() => objectHash({ title, description, timestamp }), [title, description, timestamp]);
  const { dismissed, dismiss, clear } = useDismissible('app-armor-alert', hash, 'session');

  const parsedDescription = parse(description ?? '', parserOptions);

  if (!dismissed) {
    return (
      <Modal
        open={show}
        onClose={() => {
          setShow(false);
          dismiss();
        }}
      >
        <Container className="max-w-[80rem]! p-0">
          <Alert>
            <AlertTitle>University of Guelph Alert</AlertTitle>

            <AlertMessage>
              <AlertSubtitle>{title}</AlertSubtitle>
              {parsedDescription}
            </AlertMessage>

            <AlertFooter className="flex flex-col gap-4">
              <span>Last Updated: {timestamp}</span>{' '}
            </AlertFooter>
          </Alert>
        </Container>
      </Modal>
    );
  }

  return (
    <button
      onClick={() => {
        clear();
        setShow(true);
      }}
      className="sticky top-0 left-0 z-10000 flex w-dvw cursor-pointer items-center justify-center gap-[0.25em] bg-red p-2 text-red-contrast shadow-md transition hover:bg-black hover:text-white focus:bg-black focus:text-white"
    >
      <FontAwesomeIcon className={`uofg-dismissable-alert-notification-icon`} icon={faCircleExclamation} />
      <span className="overflow-hidden text-sm text-ellipsis whitespace-nowrap">{title}</span>
    </button>
  );
}
