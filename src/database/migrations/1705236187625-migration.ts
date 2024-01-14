import { MigrationInterface, QueryRunner } from "typeorm";

export class Migration1705236187625 implements MigrationInterface {
    name = 'Migration1705236187625'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`returned_book\` (\`id\` int NOT NULL AUTO_INCREMENT, \`userId\` int NOT NULL, \`bookId\` int NOT NULL, \`score\` int NOT NULL, \`created_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updated_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`user\` (\`id\` int NOT NULL AUTO_INCREMENT, \`name\` varchar(255) NOT NULL, \`created_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updated_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), UNIQUE INDEX \`IDX_065d4d8f3b5adb4a08841eae3c\` (\`name\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`book\` (\`id\` int NOT NULL AUTO_INCREMENT, \`name\` varchar(255) NOT NULL, \`borrowedById\` int NULL, \`score\` float NULL, \`created_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updated_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), UNIQUE INDEX \`IDX_233978864a48c44d3fcafe0157\` (\`name\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`returned_book\` ADD CONSTRAINT \`FK_fe35f74a0c3a4c545de9b70df75\` FOREIGN KEY (\`userId\`) REFERENCES \`user\`(\`id\`) ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`returned_book\` ADD CONSTRAINT \`FK_f59016ea90dad0be97e3b97153b\` FOREIGN KEY (\`bookId\`) REFERENCES \`book\`(\`id\`) ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`book\` ADD CONSTRAINT \`FK_7fab03eeb91a0859aa761ab0488\` FOREIGN KEY (\`borrowedById\`) REFERENCES \`user\`(\`id\`) ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`book\` DROP FOREIGN KEY \`FK_7fab03eeb91a0859aa761ab0488\``);
        await queryRunner.query(`ALTER TABLE \`returned_book\` DROP FOREIGN KEY \`FK_f59016ea90dad0be97e3b97153b\``);
        await queryRunner.query(`ALTER TABLE \`returned_book\` DROP FOREIGN KEY \`FK_fe35f74a0c3a4c545de9b70df75\``);
        await queryRunner.query(`DROP INDEX \`IDX_233978864a48c44d3fcafe0157\` ON \`book\``);
        await queryRunner.query(`DROP TABLE \`book\``);
        await queryRunner.query(`DROP INDEX \`IDX_065d4d8f3b5adb4a08841eae3c\` ON \`user\``);
        await queryRunner.query(`DROP TABLE \`user\``);
        await queryRunner.query(`DROP TABLE \`returned_book\``);
    }

}
