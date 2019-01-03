class TodosController < ApplicationController

  before_action :set_todo, only: [:show, :edit, :update, :destroy]

  def new
    @todo = Todo.new
  end

  def create
    @todo = Todo.new(todo_params)
    @todo.save
    redirect_back fallback_location: home_path
  end

  def edit
  end

  def update
    @todo = Todo.find(params[:id])
    @todo.update(update_params)
    redirect_back fallback_location: home_path
  end

  private

  def todo_params
    params.require(:todoCreate).permit(:text, :project_id)
  end

  def update_params
    params.require(:todo).permit(:isCompleted)
  end

  def set_todo
    @todo = Todo.find(params[:id])
  end

end
