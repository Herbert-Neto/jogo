import { Caboco } from "./Caboco";

const cabocos: Caboco[] = []

cabocos.push(new Caboco());
cabocos.push(new Caboco());

cabocos.push(cabocos[0].procriar(cabocos[1]))

