
import { createClient } from '@supabase/supabase-js';

// Substitua pelas suas credenciais reais do painel do Supabase se necessário, 
// ou use variáveis de ambiente.
const SUPABASE_URL = 'https://hoepznsyzdlrzzlrlurp.supabase.co';
const SUPABASE_KEY = 'sb_publishable_ne5Px1teeHCX7KS59_qKzA_J8hucLEg';

export const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);
