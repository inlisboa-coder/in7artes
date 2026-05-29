import pinturaBase from './pintura';
import { pinturaPortugalArtistas } from './pintura-artistas';
import { pinturaPortugalMarketplace } from './pintura-marketplace';

export const pinturaPortugalCompleta = {
  ...pinturaBase,
  versao: 'v16.0',
  estado: 'Pintura Portugal ligada na app: artistas 50+50 e marketplace IN7Artes.',
  artistas: pinturaPortugalArtistas,
  mercado: pinturaPortugalMarketplace,
  proximosModulos: [
    'pintura-obras.ts',
    'pintura-museus.ts',
    'pintura-eventos.ts',
    'pintura-foruns.ts',
    'pintura-coleccionismo.ts',
    'pintura-correntes.ts',
    'pintura-galerias.ts'
  ]
};

export default pinturaPortugalCompleta;
