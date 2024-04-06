import {
  Text,
  Badge,
  Group,
  Heading,
  Stack,
  IconButton,
  Button,
  DocumentPdf,
  Camera,
} from '@samina/ui';

export const NewBankAccountPage = () => {
  return (
    <Group className="grow justify-between items-center">
      <Stack className="gap-1">
        <Group className="gap-2 items-center">
          <Heading level={5}>تعریف حساب بانکی</Heading>
          <Badge>۱۲۰ حساب</Badge>
        </Group>
        <Text className="text-secondary">
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
          استفاده از طراحان گرافیک است
        </Text>
      </Stack>
      <Group className="gap-2">
        <IconButton type="secondary">
          <DocumentPdf />
        </IconButton>
        <Button type="secondary">
          <Camera />
          <Text className="">آموزش ویدیویی</Text>
        </Button>
      </Group>
    </Group>
  );
};
