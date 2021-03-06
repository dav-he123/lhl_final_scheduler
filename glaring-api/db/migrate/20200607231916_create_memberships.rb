class CreateMemberships < ActiveRecord::Migration[6.0]
  def change
    create_table :memberships do |t|
        t.references :user, foreign_key: true
        t.references :group, foreign_key: true
        t.boolean :admin, default: false
      t.timestamps
    end
  end
end
