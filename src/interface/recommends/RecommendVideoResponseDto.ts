import { CommonVideoFields } from "../common/commonVideoFields";

export interface RecommendVideoResponseDto extends CommonVideoFields {
  uploaderId: string;
}
