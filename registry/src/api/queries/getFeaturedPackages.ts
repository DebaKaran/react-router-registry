import { API_BASE_URL } from "../../configs/config";
import type { PackageDetails } from "../types/PackageDetails";

const FEATURED_PACKAGES = ["react", "typescript", "esbuild", "vite"];

export async function getFeaturedPackages() {
  const promises = FEATURED_PACKAGES.map(async (name) => {
    const res = await fetch(`${API_BASE_URL}/${name}`);
    return res.json();
  });
  const data = await Promise.all(promises);

  return data as PackageDetails[];
}
