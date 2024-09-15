const CompanyItem: React.FC<{ title: string; description: string | number; classNames: string }> = ({
  title,
  description,
  classNames = '',
}) => (
  <p className={classNames}>
    <strong>{title}: </strong>
    {description}
  </p>
);

export default CompanyItem;
