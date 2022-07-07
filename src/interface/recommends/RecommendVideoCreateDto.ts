import { CommonVideoFields } from "../common/commonVideoFields";

export interface RecommendVideoCreateDto extends CommonVideoFields {
  uploaderId: string;
}
