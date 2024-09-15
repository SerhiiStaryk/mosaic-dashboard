import { Company } from '../../types';
import CompanyItem from './company-item';

const CompanyComponent: React.FC<{ company: Company }> = ({ company }) => {
  if (!company) return <p className='mt-4 text-base text-center'>Please select company from list...</p>;

  const classes = ['mb-5'];

  const companyDetails = [
    { title: 'ticker', description: company.ticker, classes },
    { title: 'Name', description: company.name, classes },
    { title: 'Legal name', description: company.legal_name, classes },
    { title: 'Short description', description: company.short_description, classes: ['mb-7'] },
    { title: 'Long Description', description: company.long_description, classes },
    { title: 'Web', description: company.company_url, classes },
    { title: 'Business address', description: company.business_address, classes: ['mb-7'] },
    { title: 'Business phone', description: company.business_phone_no, classes },
    { title: 'Entry legal form', description: company.entity_legal_form, classes },
    { title: 'Inc country', description: company.inc_country, classes },
    { title: 'Employees', description: company.employees, classes: ['mb-0'] },
  ];

  return (
    <div className='p-2 h-[100%] overflow-y-auto'>
      {companyDetails.map(({ title, description, classes }, idx) => (
        <CompanyItem
          key={idx}
          title={title}
          description={description}
          classNames={classes?.join(' ')}
        />
      ))}
    </div>
  );
};

export default CompanyComponent;
