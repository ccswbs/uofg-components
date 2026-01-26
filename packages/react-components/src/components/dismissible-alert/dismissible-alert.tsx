'use client';

import parse, { attributesToProps, domToReact, type DOMNode, type HTMLReactParserOptions } from 'html-react-parser';
import objectHash from 'object-hash';
import { useMemo, useState } from 'react';
import { useDismissible } from '../../utils/use-dismissible';
import { Alert, AlertFooter, AlertMessage, AlertSubtitle, AlertTitle } from '../alert/alert';
import { Button } from '../button/button';
import { Container } from '../container/container';
import { Link } from '../link/link';
import { Modal } from '../modal/modal';

export type AlertObject = {
  title: string;
  description: string;
  timestamp: string;
};

export type DismissibleAlertProps = {
  /** Whether to use the testing app armor test ID */
  alert?: AlertObject;
};

const parserOptions: HTMLReactParserOptions = {
  replace: (node, _index) => {
    if (node.type === 'text') {
      return node.data;
    }

    if (node.type !== 'tag') {
      return null;
    }

    // Disallow script, style, iframe, and img tags
    switch (node.tagName) {
      case 'script':
      case 'style':
      case 'iframe':
      case 'img':
        return null;
    }

    const NodeTag = node.name;
    const props = attributesToProps(node.attribs);
    const children = domToReact(node.children as DOMNode[], parserOptions);

    switch (node.tagName) {
      case 'a':
        return <Link href={String(props.href)}>{children}</Link>;
      default:
        return <NodeTag {...props}>{children}</NodeTag>;
    }
  },
};

export function DismissibleAlert({ alert }: DismissibleAlertProps) {
  const [show, setShow] = useState(true);
  const hash = useMemo(() => {
    return alert ? objectHash(alert) : undefined;
  }, [alert]);
  const { dismissed, dismiss } = useDismissible('app-armor-alert', hash, 'session');

  const parsedDescription = parse(alert?.description ?? '', parserOptions);

  if (alert && !dismissed) {
    return (
      <Modal open={show} onClose={() => setShow(false)}>
        <Container className="max-w-[80rem]! p-0">
          <Alert>
            <AlertTitle>University of Guelph Alert</AlertTitle>

            <AlertMessage>
              <AlertSubtitle>{alert.title}</AlertSubtitle>
              {parsedDescription}
            </AlertMessage>

            <AlertFooter className="flex flex-col gap-4">
              <span>Last Updated: {alert.timestamp}</span>{' '}
              <Button
                color="red"
                className="py-2"
                onClick={() => {
                  setShow(false);
                  dismiss();
                }}
              >
                Don&apos;t show me this again
              </Button>
            </AlertFooter>
          </Alert>
        </Container>
      </Modal>
    );
  }

  return <></>;
}
