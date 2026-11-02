import { useParams } from "react-router-dom";
import { catalogConfig } from "../../constants/catalogData/catalogConfig";

const CatalogDetail = () => {
  const { selectedCatalog, slug } = useParams<{ selectedCatalog: string; slug: string }>();

  const categoryData = selectedCatalog ? catalogConfig[selectedCatalog as keyof typeof catalogConfig] : undefined;

  const trak = categoryData?.trak?.find((p) => p.slug === slug);

  if (!trak) {
    return (
      <div className="p-5">
        <h2>Товар не найден</h2>
      </div>
    );
  }

  return (
    <div className="p-5">
      <h1>{trak.title}</h1>
    </div>
  );
};

export default CatalogDetail;