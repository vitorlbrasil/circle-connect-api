import { Exclude } from "class-transformer";
import {
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  Entity,
  UpdateDateColumn,
  OneToMany,
} from "typeorm";
import { Contact } from "./contact.entity";

@Entity("users")
class User {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  fullName: string;

  @Column({ unique: true })
  email: string;

  @Column({ length: 120 })
  @Exclude()
  password: string;

  @Column()
  phone: string;

  @Column("boolean", { default: false })
  isAdm: boolean;

  @Column("boolean", { default: true })
  isActive: boolean;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @OneToMany(() => Contact, (contact) => contact.user)
  contacts: Contact[];
}

export { User };
