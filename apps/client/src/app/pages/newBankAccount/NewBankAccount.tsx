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
import { columns } from './columns';
import { DataTableToolbar } from './Toolbar';
import { DataTable } from '../../../components/DataTable';

export interface BankAccount {
  accountTitle: string;
  accountCode: string;
  accountNumber: string;
  iBANNumber: string;
  cardNumber: string;
  bankBranchTitle: string;
  bankBranchCode: string;
}
const dummyData: BankAccount[] = [
  {
    accountTitle: 'بانک ملی شعبه ناهارخوران',
    accountCode: '5673',
    accountNumber: '12345678909874632',
    iBANNumber: 'IR660120000000008134696619',
    cardNumber: '6037997531201292',
    bankBranchTitle: 'شهرداری',
    bankBranchCode: '3452',
  },
  {
    accountTitle: 'بانک ملی شعبه ناهارخوران',
    accountCode: '1234',
    accountNumber: '178909874632',
    iBANNumber: 'IR660120000000008134696619',
    cardNumber: '6037997531201292',
    bankBranchTitle: 'شهرداری',
    bankBranchCode: '4321',
  },
  {
    accountTitle: 'بانک ملی شعبه ناهارخوران',
    accountCode: '3345',
    accountNumber: '017800909874632',
    iBANNumber: 'IR660120000000008134696619',
    cardNumber: '6037997531205675',
    bankBranchTitle: 'شهرداری',
    bankBranchCode: '3344',
  },
  {
    accountTitle: 'بانک ملت',
    accountCode: '2300',
    accountNumber: '009097632',
    iBANNumber: 'IR660120000000008134696619',
    cardNumber: '6037997531205675',
    bankBranchTitle: 'شهرداری',
    bankBranchCode: '1290',
  },
];
export const NewBankAccountPage = () => {
  return (
    <Stack className="gap-6">
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
          <IconButton variant="secondary">
            <DocumentPdf />
          </IconButton>
          <Button variant="secondary">
            <Camera />
            <Text className="">آموزش ویدیویی</Text>
          </Button>
        </Group>
      </Group>

      <DataTable data={dummyData} columns={columns}>
        <DataTableToolbar />
        <DataTable.Table />
      </DataTable>
    </Stack>
  );
};
