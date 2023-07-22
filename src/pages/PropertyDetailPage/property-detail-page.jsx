import { useState } from "react";
import { useParams } from "react-router-dom";

export default function PropertyDetailPage() {
  const [id, setId] = useState(useParams());
  console.log(id);

  return <div>Property Detail Page</div>;
}
