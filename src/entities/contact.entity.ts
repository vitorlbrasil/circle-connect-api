import {
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  Entity,
  UpdateDateColumn,
  ManyToOne,
} from "typeorm";
import { User } from "./user.entity";

@Entity("contacts")
class Contact {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  fullName: string;

  @Column({ nullable: true })
  email: string;

  @Column({ nullable: true })
  phone: string;

  @Column("boolean", { default: true })
  isActive: boolean;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @ManyToOne(() => User, (user) => user.contacts)
  user: User;
}

export { Contact };
