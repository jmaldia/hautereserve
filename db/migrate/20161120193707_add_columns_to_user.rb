class AddColumnsToUser < ActiveRecord::Migration[5.0]
  def change
    add_column :users, :is_admin, :boolean
    add_column :users, :is_owner, :boolean
    add_column :users, :is_patron, :boolean
  end
end
