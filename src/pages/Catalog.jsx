import React from "react";
import { useParams } from "react-router";

export default function Catalog() {
    const { category } = useParams();

    return <div>Catalog</div>;
}
