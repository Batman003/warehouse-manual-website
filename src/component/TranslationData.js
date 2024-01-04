import { useTranslation } from 'react-i18next';

const TranslationData = () => {
  
  const { t } = useTranslation("global");

  const topic = t("body", { returnObjects: true });
  const vehicleDocProcedureData = t("detailPage.vehicleDocProcedureData", { returnObjects: true });
  const tripArrivel = t("detailPage.tripArrivel", { returnObjects: true });
  const primaryScan = t("detailPage.primaryScan", { returnObjects: true });
  const Bagging = t("detailPage.Bagging", { returnObjects: true });
  const connection = t("detailPage.connection", { returnObjects: true });
  const tripDispatch = t("detailPage.tripDispatch", { returnObjects: true });
  const otherOperational = t("detailPage.otherOperational", { returnObjects: true });

  return {
    topic,
    vehicleDocProcedureData,
    tripArrivel,
    primaryScan,
    Bagging,
    connection,
    tripDispatch,
    otherOperational,
  };
};

export default TranslationData;
