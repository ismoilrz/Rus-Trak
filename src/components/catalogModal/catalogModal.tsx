type CatalogProps = {
    catalog: boolean,
}

const CatalogModal = ({ catalog }:CatalogProps) => {
  return (
    <div className={`${catalog ? "flex" : "hidden"} absolute top-[20vh] left-0 z-40 inset-0 bg-[#efefef] cat`}>
        CatalogModal
    </div>
  )
}

export default CatalogModal