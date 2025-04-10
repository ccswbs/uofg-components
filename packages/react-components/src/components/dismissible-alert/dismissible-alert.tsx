import objectHash from 'object-hash';
import { useMemo, useState } from 'react';
import { useDismissible } from '../../utils/use-dismissible';
import { Alert, AlertFooter, AlertMessage, AlertSubtitle, AlertTitle } from '../alert/alert';
import { Button } from '../button/button';
import { Container } from '../container/container';
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

export function DismissibleAlert({ alert }: DismissibleAlertProps) {
  const [show, setShow] = useState(true);
  const hash = useMemo(() => {
    return alert ? objectHash(alert) : undefined;
  }, [alert]);
  const { dismissed, dismiss } = useDismissible('app-armor-alert', hash, 'session');

  if (alert && !dismissed) {
    return (
      <Modal open={show} onClose={() => setShow(false)}>
        <Container className="uog:max-w-[80rem]! uog:p-0">
          <Alert>
            <AlertTitle>University of Guelph Alert</AlertTitle>

            <AlertMessage>
              <AlertSubtitle>{alert.title}</AlertSubtitle>
              {alert.description}
            </AlertMessage>

            <AlertFooter className="uog:flex uog:flex-col uog:gap-4">
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
