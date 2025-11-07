import Pagination from "./Pagination";
import "./style.css";
import { useEffect, useState } from "react";

export default function Post() {
  const [data, setData] = useState([]);
  const [pageNo, setPageNo] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(
          `https://picsum.photos/v2/list?page=${pageNo}&limit=5`
        );
        const result = await res.json();
        setData(result);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [pageNo]);

  return (
    <div className="container">
      <div className="post-container">
        {data.map((item, index) => (
          <img key={index} src={item.download_url} alt="img" />
        ))}
      </div>

      <Pagination pageNo={pageNo} setPageNo={setPageNo} />
    </div>
  );
}
