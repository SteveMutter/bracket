import { Group, Text } from '@mantine/core';
import { Dropzone, MIME_TYPES } from '@mantine/dropzone';
import { IconCloudUpload, IconDownload, IconX } from '@tabler/icons-react';
import { useTranslation } from 'next-i18next';
import { useRef } from 'react';

import { Tournament } from '../../interfaces/tournament';
import { uploadLogo } from '../../services/adapter';

export function DropzoneButton({ tournament }: { tournament: Tournament }) {
  // const { classes, theme } = useStyles();
  const openRef = useRef<() => void>(null);
  const { t } = useTranslation();

  return (
    <div>
      <Dropzone
        mt="lg"
        openRef={openRef}
        onDrop={async (files) => uploadLogo(tournament.id, files[0])}
        // className={classes.dropzone}
        radius="md"
        accept={[MIME_TYPES.png, MIME_TYPES.jpeg]}
        maxSize={30 * 1024 ** 2}
      >
        <div style={{ pointerEvents: 'none' }}>
          <Group justify="center">
            <Dropzone.Accept>
              <IconDownload size={50} stroke={1.5} />
            </Dropzone.Accept>
            <Dropzone.Reject>
              <IconX size={50} stroke={1.5} />
            </Dropzone.Reject>
            <Dropzone.Idle>
              <IconCloudUpload size={50} stroke={1.5} />
            </Dropzone.Idle>
          </Group>

          <Text ta="center" fw={700} size="lg" mt="xl">
            <Dropzone.Accept>{t('dropzone_accept_text')}</Dropzone.Accept>
            <Dropzone.Reject>{t('dropzone_reject_text')}</Dropzone.Reject>
            <Dropzone.Idle>{t('dropzone_idle_text')}</Dropzone.Idle>
          </Text>
          <Text ta="center" size="sm" mt="xs" c="dimmed">
            {t('upload_placeholder')}
          </Text>
        </div>
      </Dropzone>
    </div>
  );
}
