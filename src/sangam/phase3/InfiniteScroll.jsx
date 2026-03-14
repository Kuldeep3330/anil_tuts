import { useEffect, useRef, useState } from "react";

export default function InfiniteScroll() {
  const [data, setData] = useState([]);
  const [pageNo, setPageNo] = useState(1);
  const lastImageRef = useRef(null);

  // Fetch data when pageNo changes
  useEffect(() => {
    fetch(`https://picsum.photos/v2/list?page=${pageNo}&limit=3`)
      .then((res) => res.json())
      .then((arr) =>
        setData((oldData) => [...oldData, ...arr])
      );
  }, [pageNo]);

  // Intersection Observer
  useEffect(() => {
    if (!lastImageRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setPageNo((prev) => prev + 1);
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(lastImageRef.current);

    return () => observer.disconnect();
  }, [data]);

  return (
    <div style={{ textAlign: "center" }}>
      {data.map((item, index) => {
        if (index === data.length - 1) {
          return (
            <img
              ref={lastImageRef}
              key={item.id}
              src={item.download_url}
              alt=""
              style={{ width: "300px", margin: "10px" }}
            />
          );
        }
        return (
          <img
            key={item.id}
            src={item.download_url}
            alt=""
            style={{ width: "300px", margin: "10px" }}
          />
        );
      })}
    </div>
  );
}