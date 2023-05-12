import BCryptHashProvider from "./implementations/BCryptHashProvider";

type HashProviders = typeof BCryptHashProvider;
export type HashProviderKeys = "bcrypt";

export const hashProviderImplementations: Record<HashProviderKeys, HashProviders> = {
	bcrypt: BCryptHashProvider,
};

export default abstract class HashProvider {
	abstract compareHash(payload: string, hashed: string): Promise<boolean>;
	abstract generateHash(payload: string): Promise<string>;
}
