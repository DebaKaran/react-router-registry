import { API_BASE_URL } from "../../configs/config";
import type { PackageDetails } from "../types/PackageDetails";

export async function getPackage(name: string): Promise<PackageDetails> {
  const res = await fetch(`${API_BASE_URL}/${name}`);
  const data = await res.json();

  return data as PackageDetails;
}
