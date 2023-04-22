enum RFPStatus {
  APRROVED = "APPROVED",
  REJECTED = "REJECTED",
}

interface RFP {
  rfp_number: number;
  date_submitted: Date;
  status: RFPStatus;
}
