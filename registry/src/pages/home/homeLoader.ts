import { getFeaturedPackages } from "../../api/queries/getFeaturedPackages";
import type { PackageDetails } from "../../api/types/PackageDetails";

export interface HomeLoaderResult {
  featurePackages: PackageDetails[];
}

export async function homeLoader(): Promise<HomeLoaderResult> {
  const featurePackages = await getFeaturedPackages();
  return {
    featurePackages,
  };
}
