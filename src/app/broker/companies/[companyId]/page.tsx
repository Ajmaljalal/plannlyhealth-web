
const Company = ({
  params,
  searchParams,
}: {
  params: { companyId: string };
  searchParams?: { [key: string]: string | string[] | undefined };
}) => {
  console.log('params', params.companyId)
  console.log('searchParams', searchParams)
  return (
    <div>Company</div>
  )
}

export default Company