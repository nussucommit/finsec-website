enum RFPStatus {
  APRROVED = "APPROVED",
  REJECTED = "REJECTED",
  PENDING = "PENDING"
}

interface RFP {
  rfp_number: string;
  date_submitted: Date;
  status: RFPStatus;
  submitter?: string;
  executive?: string;
}

interface Resource {
  name: string;
  link: string;
}