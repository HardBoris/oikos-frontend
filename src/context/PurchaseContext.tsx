import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { localApi as api } from "../services/api";
import { useAuth } from "./UserContext";

interface PurchaseProviderProps {
  children: ReactNode;
}

interface PurchaseDetail {
  purchaseDetailId: string;
  purchaseId: string;
  ingredientName: string;
  ingredientQty: number;
  measurementUnit: string;
  ingredientPrice: number;
}

export interface Purchase {
  purchaseId: string;
  purchaseDate: string;
  userId: string;
  purchaseDetails: PurchaseDetail[];
}

interface ingredientData {
  ingredientName: string;
  ingredientQty: string;
  measurementUnit: string;
  ingredientPrice: string;
}

interface PurchaseContextData {
  purchases: Purchase[];
  ingredient: PurchaseDetail;
  //   purchaseDetails: PurchaseDetail[];
  Shopping: () => void;
  Compra: (data: ingredientData) => Promise<void>;
}

export const PurchaseContext = createContext<PurchaseContextData>(
  {} as PurchaseContextData
);

const usePurchase = () => useContext(PurchaseContext);

const PurchaseProvider = ({ children }: PurchaseProviderProps) => {
  const { token } = useAuth();
  const [purchases, setPurchases] = useState<Purchase[]>([]);
  // const [purchaseDetails, setPurchaseDetail] = useState<PurchaseDetail[]>([]);
  const [ingredient, setIngredient] = useState<PurchaseDetail>(
    {} as PurchaseDetail
  );

  const Shopping = async () => {
    await api
      .get("/oikos-api/purchases", {
        headers: {
          authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        console.log(response);
        setPurchases(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const Compra = async (data: ingredientData) => {
    await api
      .post("/oikos-api/purchases/:purchaseId", { data })
      .then((response) => {
        setIngredient(response.data);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    Shopping();
  });

  return (
    <PurchaseContext.Provider
      value={{ purchases, ingredient, /* purchaseDetails */ Shopping, Compra }}
    >
      {children}
    </PurchaseContext.Provider>
  );
};

export { usePurchase, PurchaseProvider };
