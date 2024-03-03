import { ReactNode } from 'react';

interface LngInterface {
  nativeName: string;
}

export interface LayoutInterface {
  children?: ReactNode;
}

export interface LangSelectorInterface {
  en: LngInterface;
  ptBr: LngInterface;
}
