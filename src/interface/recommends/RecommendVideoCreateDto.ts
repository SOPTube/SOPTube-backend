import { CommonVideoFields } from "../common/CommonVideoFields";

export interface RecommendVideoCreateDto extends CommonVideoFields {
  uploaderId: string;
}
