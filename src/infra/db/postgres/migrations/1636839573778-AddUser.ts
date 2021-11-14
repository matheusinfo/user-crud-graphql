import {MigrationInterface, QueryRunner, Table} from 'typeorm'

export class AddUser1636839573778 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'user',
                columns: [{
                    name: 'id',
                    type: 'int',
                    isPrimary: true,
                    isGenerated: true,
                    generationStrategy: 'increment',
                },{
                    name: 'name',
                    type: 'varchar',
                    isNullable: false
                },{
                    name: 'email',
                    type: 'varchar',
                    isNullable: false
                },{
                    name: 'password',
                    type: 'varchar',
                    isNullable: false
                },{
                    name: 'created_at',
                    type: 'timestamp',
                    default: 'now()',
                }]
            }), true
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('user')
    }
}


