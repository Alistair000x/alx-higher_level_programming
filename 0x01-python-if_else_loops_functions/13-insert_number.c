#include "lists.h"

/**
 * insert_node - inserts a new node
 * @head: pointer
 * @number: value
 * Return: the address of the new node, or NULL if it failed.
 */
listint_t *insert_node(listint_t **head, int number)
{
	listint_t *new_node;
	listint_t *current;
	listint_t *previous;

	current = *head;
	new_node = malloc(sizeof(listint_t));

	if (new_node == NULL)
		return (NULL);

	while (current != NULL)
	{
		if (current->n > number)
			break;
		previous = current;
		current = current->next;
	}

	new_node->n = number;

	if (*head == NULL)
	{
		new_node->next = NULL;
		*head = new_node;
	}
	else
	{
		new_node->next = current;
		if (current == *head)
			*head = new_node;
		else
			previous->next = new_node;
	}

	return (new_node);
}
