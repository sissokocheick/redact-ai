export enum DocumentType {
  MOTIVATION = 'Lettre de motivation',
  RECLAMATION = 'Email de réclamation',
  CONGES = 'Demande de congés',
  RESILIATION = 'Rupture de bail / Résiliation',
  REMBOURSEMENT = 'Demande de remboursement',
  ADMINISTRATIF = 'Courrier administratif générique'
}

export enum DocumentTone {
  FORMEL = 'Formel et respectueux',
  FERME = 'Ferme et direct',
  EMPATHIQUE = 'Empathique et chaleureux',
  NEUTRE = 'Neutre et factuel'
}

export interface GenerationRequest {
  type: DocumentType;
  tone: DocumentTone;
  context: string;
}

export interface GenerationResponse {
  content: string;
  error?: string;
}