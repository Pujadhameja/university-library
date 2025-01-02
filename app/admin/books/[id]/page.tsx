import Link from "next/link";
import React from "react";

const Page = () => {
  return (
    <div>
      Page
      <Link href="/admin/books">Go Back</Link>
    </div>
  );
};

export default Page;
