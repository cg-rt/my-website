export function isFormEndpoint(value: string | undefined): boolean;
export function validateInquiry(data: FormData): Partial<Record<'name' | 'email' | 'message', string>>;
export function submitInquiry(endpoint: string, data: FormData, options?: { fetcher?: typeof fetch; timeoutMs?: number }): Promise<{ ok: boolean; reason?: string }>;
