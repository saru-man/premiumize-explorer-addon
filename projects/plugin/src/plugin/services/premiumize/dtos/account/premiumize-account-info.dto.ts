export interface PremiumizeAccountInfoDto {
  status: 'success' | 'error';
  customer_id: number;
  premium_until: number | boolean;
  limit_used: number;
  space_used: number;
}
