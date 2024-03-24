'use client';
import { useParams, useRouter } from 'next/navigation';
import React from 'react';

const PropertyPage = () => {
  const { id } = useParams();

  console.log(id);
  return <div>PropertyPageid: {id}</div>;
};

export default PropertyPage;
