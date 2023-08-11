import {
  query,
  collection,
  onSnapshot,
  orderBy,
  deleteDoc,
  doc,
} from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../firebase/config";
import { useAuth } from "./useAuth";
type Image = {
  createdAt: Date;
  userEmail: string;
  imageUrl: string;
  imageId: string;
};
const useFirestore = (collectionName: string) => {
  const [docs, setDocs] = useState<Image[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const { user } = useAuth();

  useEffect(() => {
    let unsubscribe: () => void;
    const getData = async () => {
      try {
        const q = query(
          collection(db, collectionName),
          orderBy("createdAt", "desc")
        );
        unsubscribe = onSnapshot(q, (querySnapshot) => {
          const images: Image[] = [];

          querySnapshot.forEach((doc) => {
            const imageUrl = doc.data().imageUrl;
            const createdAt = doc.data().createdAt.toDate();
            const userEmail = doc.data().userEmail;
            const imageId = doc.id;
            images.push({ imageUrl, createdAt, userEmail, imageId });
          });
          setDocs(images);
          setIsLoading(false);
        });
      } catch (error) {
        console.error("Error : ", error);
        setIsLoading(false);
      }
    };
    getData();

    return () => unsubscribe && unsubscribe();
  }, [collectionName]);

  const deleteADoc = async (imageId: string, imageUser: string) => {
    const canDelete = user?.email === imageUser;
    try {
      if (canDelete) {
        await deleteDoc(doc(db, collectionName, imageId));
      } else {
        console.log("Not the good user");
      }
    } catch (error) {
      console.log("Error : ", error);
    }
  };

  return {
    docs,
    deleteADoc,
    isLoading,
  };
};

export default useFirestore;
