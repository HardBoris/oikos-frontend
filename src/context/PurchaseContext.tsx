import {
  createContext,
  ReactNode,
  useContext,
  // useEffect,
  useState,
} from "react";
import { localApi as api } from "../services/api";
import { useAuth } from "./UserContext";
import { useNavigate } from "react-router-dom";

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
  // purchaseDetails: PurchaseDetail[];
  Shopping: () => void;
  Compra: () => void;
  itemCompra: (data: ingredientData, purchaseId: string) => Promise<void>;
  eliminaCompra: (id: string) => void;
}

export const PurchaseContext = createContext<PurchaseContextData>(
  {} as PurchaseContextData
);

const usePurchase = () => useContext(PurchaseContext);

const PurchaseProvider = ({ children }: PurchaseProviderProps) => {
  const history = useNavigate();
  const { token } = useAuth();
  const [purchases, setPurchases] = useState<Purchase[]>([]);
  const [compraId, setCompraId] = useState("");
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

  /* useEffect(() => {
    Shopping();
  }, []); */

  const Compra = () => {
    api
      .post(
        "/oikos-api/purchases",
        {},
        {
          headers: {
            authorization: `Bearer ${token}`,
          },
        }
      )
      .then((response) => {
        history(`/purchases/${response.data.purchaseId}`);
        // setCompraId(response.data.purchaseId);
      })
      .catch((error) => console.log(error));
  };

  const itemCompra = async (data: ingredientData, purchaseId: string) => {
    await api
      .post(`/oikos-api/purchases/${purchaseId}`, data, {
        headers: {
          authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => console.log(error));
  };

  const eliminaCompra = async (id: string) => {
    await api
      .delete(`/oikos-api/purchases/${id}`, {
        headers: {
          authorization: `Bearer ${token}`,
        },
      })
      .then((response) => console.log(response.data))
      .catch((error) => console.log(error));
  };

  return (
    <PurchaseContext.Provider
      value={{
        purchases,
        ingredient,
        Shopping,
        Compra,
        itemCompra,
        eliminaCompra,
      }}
    >
      {children}
    </PurchaseContext.Provider>
  );
};

export { usePurchase, PurchaseProvider };
