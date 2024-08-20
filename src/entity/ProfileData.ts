import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity()
export class ProfileData {
  @PrimaryColumn()
  key!: string;

  @Column()
  value!: string;

  @Column()
  display_name?: string;
}
