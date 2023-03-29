"""empty message

Revision ID: be53bbbe70aa
Revises: 0e8adb7eac45
Create Date: 2023-03-24 14:17:51.150985

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'be53bbbe70aa'
down_revision = '0e8adb7eac45'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('administradores',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('id_user', sa.Integer(), nullable=True),
    sa.Column('name', sa.String(length=100), nullable=True),
    sa.ForeignKeyConstraint(['id_user'], ['user.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('monitor',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('id_user', sa.Integer(), nullable=True),
    sa.Column('name', sa.String(length=100), nullable=True),
    sa.Column('last_name', sa.String(length=100), nullable=True),
    sa.ForeignKeyConstraint(['id_user'], ['user.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('participante',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('id_user', sa.Integer(), nullable=True),
    sa.Column('name', sa.String(length=100), nullable=True),
    sa.Column('last_name', sa.String(length=100), nullable=True),
    sa.Column('url_image', sa.String(length=100), nullable=True),
    sa.Column('numero_telefono', sa.Integer(), nullable=True),
    sa.Column('nombre_contacto_emergencia', sa.String(length=100), nullable=True),
    sa.Column('numero_contacto_emergencia', sa.Integer(), nullable=True),
    sa.Column('asistencia_medica', sa.String(length=100), nullable=True),
    sa.ForeignKeyConstraint(['id_user'], ['user.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    with op.batch_alter_table('evento', schema=None) as batch_op:
        batch_op.add_column(sa.Column('id_monitor', sa.Integer(), nullable=False))
        batch_op.add_column(sa.Column('cantidad_maxima_participantes', sa.Integer(), nullable=False))
        batch_op.add_column(sa.Column('precio', sa.Integer(), nullable=False))
        batch_op.add_column(sa.Column('realizado', sa.Boolean(), nullable=True))
        batch_op.create_foreign_key(None, 'monitor', ['id_monitor'], ['id'])
        batch_op.create_foreign_key(None, 'tipo_de__evento', ['id_tipo'], ['id'])

    with op.batch_alter_table('participantes_de__eventos', schema=None) as batch_op:
        batch_op.add_column(sa.Column('apto_medico', sa.Boolean(), nullable=True))
        batch_op.add_column(sa.Column('asistencia', sa.Boolean(), nullable=True))
        batch_op.create_foreign_key(None, 'evento', ['id_evento'], ['id'])
        batch_op.create_foreign_key(None, 'participante', ['id_participante'], ['id'])

    with op.batch_alter_table('tipo_de__evento', schema=None) as batch_op:
        batch_op.alter_column('descripcion',
               existing_type=sa.INTEGER(),
               type_=sa.String(length=1000),
               existing_nullable=False)

    with op.batch_alter_table('user', schema=None) as batch_op:
        batch_op.add_column(sa.Column('is_active', sa.Boolean(), nullable=True))
        batch_op.drop_column('name')
        batch_op.drop_column('last_name')

    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('user', schema=None) as batch_op:
        batch_op.add_column(sa.Column('last_name', sa.VARCHAR(length=80), autoincrement=False, nullable=False))
        batch_op.add_column(sa.Column('name', sa.VARCHAR(length=80), autoincrement=False, nullable=False))
        batch_op.drop_column('is_active')

    with op.batch_alter_table('tipo_de__evento', schema=None) as batch_op:
        batch_op.alter_column('descripcion',
               existing_type=sa.String(length=1000),
               type_=sa.INTEGER(),
               existing_nullable=False)

    with op.batch_alter_table('participantes_de__eventos', schema=None) as batch_op:
        batch_op.drop_constraint(None, type_='foreignkey')
        batch_op.drop_constraint(None, type_='foreignkey')
        batch_op.drop_column('asistencia')
        batch_op.drop_column('apto_medico')

    with op.batch_alter_table('evento', schema=None) as batch_op:
        batch_op.drop_constraint(None, type_='foreignkey')
        batch_op.drop_constraint(None, type_='foreignkey')
        batch_op.drop_column('realizado')
        batch_op.drop_column('precio')
        batch_op.drop_column('cantidad_maxima_participantes')
        batch_op.drop_column('id_monitor')

    op.drop_table('participante')
    op.drop_table('monitor')
    op.drop_table('administradores')
    # ### end Alembic commands ###
