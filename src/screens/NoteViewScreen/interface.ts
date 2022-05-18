import { RouteProp } from "@react-navigation/native";
import { NoteItem } from "../../components/Note/interface";
import { ScreenDefaultProps } from "../../routes/interface";

export interface NoteViewScreenProps extends ScreenDefaultProps {
  route: RouteProp<{
    params: {
      note: NoteItem;
    };
  }>
}
