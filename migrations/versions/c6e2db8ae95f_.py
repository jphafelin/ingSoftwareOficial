"""empty message

Revision ID: c6e2db8ae95f
Revises: be68e2c6003a
Create Date: 2024-10-09 01:35:42.051617

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'c6e2db8ae95f'
down_revision = 'be68e2c6003a'
branch_labels = None
depends_on = None


def upgrade():
    # ### Eliminar la clave foránea primero ###
    with op.batch_alter_table('evento', schema=None) as batch_op:
        batch_op.drop_constraint('evento_id_tipo_fkey', type_='foreignkey')
        batch_op.drop_column('id_tipo')

    # ### Ahora eliminar la tabla ###
    op.execute('DROP TABLE IF EXISTS tipo_de__evento CASCADE')


def downgrade():
    # ### Restaurar la tabla tipo_de__evento y la clave foránea ###
    op.create_table('tipo_de__evento',
        sa.Column('id', sa.INTEGER(), autoincrement=True, nullable=False),
        sa.Column('name', sa.VARCHAR(length=80), autoincrement=False, nullable=False),
        sa.Column('dificultad', sa.VARCHAR(length=120), autoincrement=False, nullable=False),
        sa.Column('categoria', sa.VARCHAR(length=120), autoincrement=False, nullable=False),
        sa.Column('descripcion', sa.VARCHAR(length=1000), autoincrement=False, nullable=False),
        sa.Column('apellido2', sa.VARCHAR(length=120), autoincrement=False, nullable=False),
        sa.PrimaryKeyConstraint('id', name='tipo_de__evento_pkey')
    )

    with op.batch_alter_table('evento', schema=None) as batch_op:
        batch_op.add_column(sa.Column('id_tipo', sa.INTEGER(), autoincrement=False, nullable=False))
        batch_op.create_foreign_key('evento_id_tipo_fkey', 'tipo_de__evento', ['id_tipo'], ['id'])

