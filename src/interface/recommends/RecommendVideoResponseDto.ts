import { CommonVideoFields } from "../common/CommonVideoFields";

export interface RecommendVideoResponseDto extends CommonVideoFields {
  uploaderId: string;
}
