import config from "@payload-config";
import { RootPage, generatePageMetadata } from "@payloadcms/next/views";
import { getNextRequestI18n } from "@payloadcms/next/utilities";
import { ProgressBar, RootProvider } from "@payloadcms/ui";
import { getClientConfig } from "@payloadcms/ui/utilities/getClientConfig";
import type { LanguageOptions } from "payload";
import { importMap } from "../importMap";
import { serverFunction } from "../serverFunction";

const adminConfig = Promise.resolve(config).then((cfg) => ({
  ...cfg,
  collections: cfg.collections ?? [],
  globals: cfg.globals ?? [],
  endpoints: cfg.endpoints ?? [],
}));

type AdminPageProps = {
  params: Promise<{
    segments: string[];
  }>;
  searchParams: Promise<{
    [key: string]: string | string[];
  }>;
};

export const generateMetadata = ({ params, searchParams }: AdminPageProps) =>
  generatePageMetadata({
    config: adminConfig,
    params,
    searchParams,
  });

const AdminPage = async ({ params, searchParams }: AdminPageProps) => {
  const [cfg, view] = await Promise.all([
    adminConfig,
    RootPage({
      config: adminConfig,
      importMap,
      params,
      searchParams,
    }),
  ]);
  const i18n = await getNextRequestI18n({ config: cfg });
  const languageOptions: LanguageOptions = Object.entries(
    cfg.i18n.supportedLanguages || {},
  ).reduce<LanguageOptions>((acc, [language, languageConfig]) => {
    acc.push({
      label: languageConfig.translations.general.thisLanguage,
      value: language as LanguageOptions[number]["value"],
    });

    return acc;
  }, []);
  const clientConfig = getClientConfig({
    config: cfg,
    i18n,
    importMap,
    user: true,
  });

  async function switchLanguageServerAction() {
    "use server";
  }

  return (
    <RootProvider
      config={clientConfig}
      dateFNSKey={i18n.dateFNSKey}
      fallbackLang={cfg.i18n.fallbackLanguage}
      isNavOpen={true}
      languageCode={i18n.language}
      languageOptions={languageOptions}
      locale={undefined}
      permissions={null as never}
      serverFunction={serverFunction}
      switchLanguageServerAction={switchLanguageServerAction}
      theme="light"
      translations={i18n.translations}
      user={null}
    >
      <ProgressBar />
      {view}
    </RootProvider>
  );
};

export default AdminPage;
