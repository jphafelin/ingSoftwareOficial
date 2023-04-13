"""empty message

Revision ID: 74d540a97fb8
Revises: c8d44552d015
Create Date: 2023-04-13 08:25:37.148621

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '74d540a97fb8'
down_revision = 'c8d44552d015'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('imagenes_carrusel',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('id_tipo', sa.Integer(), nullable=True),
    sa.Column('url_imagen', sa.String(length=255), nullable=True),
    sa.Column('texto', sa.String(length=255), nullable=True),
    sa.ForeignKeyConstraint(['id_tipo'], ['tipo_de__evento.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    with op.batch_alter_table('administradores', schema=None) as batch_op:
        batch_op.add_column(sa.Column('last_name', sa.String(length=100), nullable=True))

    with op.batch_alter_table('user', schema=None) as batch_op:
        batch_op.add_column(sa.Column('is_admin', sa.Boolean(), nullable=True))

    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('user', schema=None) as batch_op:
        batch_op.drop_column('is_admin')

    with op.batch_alter_table('administradores', schema=None) as batch_op:
        batch_op.drop_column('last_name')

    op.drop_table('imagenes_carrusel')
    # ### end Alembic commands ###
