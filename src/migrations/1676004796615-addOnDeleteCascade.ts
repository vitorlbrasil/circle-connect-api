import { MigrationInterface, QueryRunner } from "typeorm";

export class addOnDeleteCascade1676004796615 implements MigrationInterface {
    name = 'addOnDeleteCascade1676004796615'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "contacts" ALTER COLUMN "email" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "contacts" ALTER COLUMN "phone" DROP NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "contacts" ALTER COLUMN "phone" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "contacts" ALTER COLUMN "email" SET NOT NULL`);
    }

}
