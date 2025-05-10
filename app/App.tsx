import { styles } from "@/assets/styles";
import { useState } from "react";
import { Text, View } from "react-native";

export default function Index() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <View style={styles.container}>
      <Text>Usuário conectado: {isAuthenticated ? "Sim" : "Não"}</Text>
    </View>
  );
}
